export const fileDownloader = (url) => {
  let a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.click();
};