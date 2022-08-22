import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

export function showDateSinceDateOrNow(date?: string): string {
  return !date ? dayjs().toNow() : dayjs().to(dayjs(date));
}
