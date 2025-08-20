/* src/app/(main)/parents-corner/[slug]/page.js */
import { createDetailPage } from "@/lib/pageFactory";
import {
  getTestimonialBySlug,
  getTestimonials,
} from "@/services/parentsCornerService";
import TestimonialDetailPage from "@/pages_jsx/ParentsCorner/Detail/TestimonialDetailPage";

const { generateMetadata, Page } = createDetailPage({
  entityName: "Chia sẻ của phụ huynh",
  getDataBySlug: getTestimonialBySlug,
  getOtherData: async (slug) => {
    // Lấy 7 testimonials, lọc ra cái hiện tại, còn lại tối đa 6
    const allTestimonials = await getTestimonials(7);
    return allTestimonials.filter((item) => item.slug !== slug).slice(0, 6);
  },
  DetailPageComponent: TestimonialDetailPage,
  generateTitle: (testimonial) => `${testimonial.name} - A&U English`,
  generateDescription: (testimonial) =>
    testimonial.content?.replace(/<[^>]+>/g, "").substring(0, 160) ||
    `Chia sẻ từ ${testimonial.name} tại A&U English.`,
});

export { generateMetadata };
export default Page;
