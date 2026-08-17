/*
 * Phosphor, via the /ssr entry so the same glyphs render in both server
 * and client components without pulling the context provider in.
 *
 * One family, one weight, for the whole project.
 */
export {
  MagnifyingGlass as Search,
  UserCircle as User,
  Heart,
  ShoppingBagOpen as Bag,
  List as Menu,
  X as Close,
  CaretRight as Chevron,
  Star,
  Truck,
  CreditCard as Card,
  ShieldCheck as Shield,
  ChatCircleText as Chat,
} from "@phosphor-icons/react/dist/ssr";

import {
  ChatCircleText,
  CreditCard,
  ShieldCheck,
  Truck,
} from "@phosphor-icons/react/dist/ssr";

export const serviceIcons = {
  truck: Truck,
  card: CreditCard,
  shield: ShieldCheck,
  chat: ChatCircleText,
};

/** Single stroke weight across the project. */
export const ICON_WEIGHT = "regular" as const;
