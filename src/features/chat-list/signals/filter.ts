import { Filter } from "@chat-list/constants/filter.interface";
import { computed, signal } from "@preact/signals-react";

export const activeFilter = signal<Filter>(Filter.all)


export const placeholderText = computed(() => {
    switch (activeFilter.value) {
      case Filter.notRead:
        return "Busca en chats no leídos";
      case Filter.favorites:
        return "Buscar chats favoritos";
      case Filter.groups:
        return "Busca en chats grupales";
      default:
        return "Buscar";
    }
  });