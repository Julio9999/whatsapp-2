import { View } from "@side-bar/interfaces/side-bar.interface";
import { signal } from "@preact/signals-react";

export const activeSection = signal<View>(View.chats)
