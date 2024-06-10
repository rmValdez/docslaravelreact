import { AcknowledgedIcon, CancelIcon, CheckIcon, CloseIcon, PendingIcon } from "../../components/icons/MaterialIcons";
import { ACKNOWLEDGED, ACTIVE, APPROVED, CANCELLED, INACTIVE, PENDING, PENDING_DELETE, REJECTED } from "./statusEnums";

export const STATUS_ICONS = Object.freeze({
  [ACTIVE]: undefined,
  [INACTIVE]: undefined,
  [PENDING]: PendingIcon,
  [PENDING_DELETE]: undefined,
  [REJECTED]: CloseIcon,
  [ACKNOWLEDGED]: AcknowledgedIcon,
  [APPROVED]: CheckIcon,
  [CANCELLED]: CancelIcon,
});