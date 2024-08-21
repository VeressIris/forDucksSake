import AboutSection from "./AboutSection";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center px-20">
      <h1 className="text-5xl font-medium mb-4">About us:</h1>
      <AboutSection
        title="Our mission"
        text="At For Duck's Sake, we believe that every duck deserves a clean and safe habitat. Our mission is simple: to restore and maintain the natural beauty of ponds and wetlands, ensuring that ducks and other wildlife thrive in a healthy environment. By removing harmful pollutants and revitalizing these crucial ecosystems, we're making a lasting impact on both local wildlife and the communities that cherish them."
        imgPath="/ducks2.jpg"
        imgPosition="right"
      ></AboutSection>
      <AboutSection
        title="What We Do"
        text="We specialize in the comprehensive cleaning and rehabilitation of ponds, focusing on the removal of contaminants, invasive species, and debris that threaten duck populations. Our team of environmental experts uses eco-friendly methods to restore balance to these ecosystems, ensuring that ducks have clean water to swim in, clean spaces to nest, and a thriving habitat to call home."
        imgPath="/dirty_water.jpg"
        imgPosition="left"
      ></AboutSection>
      <AboutSection
        title="Why it matters"
        text="Healthy ponds are the lifeblood of local wildlife. Ducks rely on these water bodies not just for survival, but for breeding, feeding, and raising their young. When ponds become polluted or overrun with harmful substances, ducks suffer. By maintaining clean and safe environments, we protect these beautiful creatures and preserve the natural world for future generations."
        imgPath="/ducks1.jpg"
        imgPosition="right"
      ></AboutSection>
      <AboutSection
        title="Our impact"
        text="Since our inception, Duck Haven has successfully restored numerous ponds, leading to the resurgence of local duck populations and improved biodiversity in surrounding areas. Our work has not only benefitted wildlife but also enhanced the beauty and recreational value of these natural spaces for local communities. We are proud to be a part of something bigger, contributing to a world where both ducks and people can thrive in harmony."
        imgPath="/ducks3.jpg"
        imgPosition="left"
      ></AboutSection>
    </div>
  );
}
