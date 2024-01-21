export const addScrollListener = (
  sections,
  setScrolled,
  setActiveTab,
  pageId
) => {
  let thisPage = document.querySelector(`#${pageId}`);

  const handleScrollHere = () => {
    const scrollTop = parseFloat(thisPage.scrollTop);
    if (scrollTop > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    const sectionOffsets = sections.map((section) => {
      const sectionElement = document.getElementById(section.id);
      return {
        id: section.id,
        top: sectionElement.getBoundingClientRect().top,
        bottom: sectionElement.getBoundingClientRect().bottom,
      };
    });

    // Determine which section is currently in view
    let currentSection = null;
    for (const section of sectionOffsets) {
      if (section.top <= 80 && section.bottom >= 80) {
        currentSection = section.id;
        break;
      }
    }
    setActiveTab(currentSection);
  };

  handleScrollHere(); // Call it once to set the initial active tab
  thisPage.addEventListener("scroll", handleScrollHere);

  return () => {
    thisPage.removeEventListener("scroll", handleScrollHere);
  };
};
