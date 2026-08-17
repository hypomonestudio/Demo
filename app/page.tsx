import { CategoryRail } from "@/components/category-rail";
import { Editorial } from "@/components/editorial";
import { Hero } from "@/components/hero";
import { Materials } from "@/components/materials";
import { OfferTabs } from "@/components/offer-tabs";
import { PriceDrop } from "@/components/price-drop";
import { RoomGrid } from "@/components/room-grid";
import { ServiceStrip } from "@/components/service-strip";
import { Showroom } from "@/components/showroom";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StyleTabs } from "@/components/style-tabs";

/*
 * Section order follows the references: promotion first, orientation
 * second, then alternating offer blocks and editorial breaks, and the
 * showroom last before the footer.
 */
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CategoryRail />
        <ServiceStrip />
        <OfferTabs />
        <Editorial />
        <PriceDrop />
        <RoomGrid />
        <StyleTabs />
        <Materials />
        <Showroom />
      </main>
      <SiteFooter />
    </>
  );
}
