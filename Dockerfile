FROM  composer:2.6.6 as vendor

WORKDIR /app
COPY ./src/composer.json /app/composer.json
COPY ./src/composer.lock /app/composer.lock

RUN composer install --ignore-platform-reqs --no-interaction --no-plugins --no-scripts --prefer-dist

# https://hub.docker.com/_/php ("  ")
FROM public.ecr.aws/h1y8m9v5/nmsph-php8.2

RUN docker-php-ext-install pdo_mysql
# Install necessary utilities
RUN apt-get update && apt-get install -y \
    apache2-utils \
    && rm -rf /var/lib/apt/lists/*
# Appliction
ENV HTTP_LOCAL_CONF docslaravelreact.local.conf

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


WORKDIR /app


# Apache, Supervisord, Etc... Configuration
RUN echo "alias artisan='sudo -u www-data php artisan'" >> /root/.bashrc \
    && echo "alias composer='sudo -u www-data composer'" >> /root/.bashrc
COPY ./playbook/conf/httpd_conf/$HTTP_LOCAL_CONF /etc/apache2/sites-available/
# COPY ./playbook/conf/httpd_conf/$HTTP_LIVE_CONF /etc/apache2/sites-available/
# COPY ./playbook/conf/httpd_conf/$HTTP_STAGING_CONF /etc/apache2/sites-available/
RUN a2enmod rewrite headers && service apache2 restart
RUN a2dissite 000-default.conf && a2ensite $HTTP_LOCAL_CONF

# Cron conf
#COPY --chmod=644 ./playbook/conf/cron/scheduler /etc/cron.d/scheduler
#RUN crontrab -u www-data /etc/cron.d/scheduler

# Deploy Site
COPY --chown=www-data:www-data ./src /app
COPY --from=vendor /app/vendor /app/vendor/

EXPOSE 80 443


CMD ["apache2-foreground"]
# CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
