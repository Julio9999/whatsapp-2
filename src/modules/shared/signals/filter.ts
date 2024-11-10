import { Filter } from "@/modules/chat-list/constants/filter.interface";
import { signal } from "@preact/signals-react";

export const activeFilter = signal<Filter>(Filter.all)
