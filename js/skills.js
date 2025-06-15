
  const skills = [
    "Strength Training",
    "Expert Coaching",
    "Tailored Programs"
  ];

  const bannerSkills = document.querySelector(".banner-skills");
  let skillIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentSkill = skills[skillIndex];
    const displayedText = currentSkill.substring(0, charIndex);
    bannerSkills.textContent = displayedText;

    if (!isDeleting && charIndex < currentSkill.length) {
      // Typing
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      charIndex--;
      setTimeout(type, typingSpeed / 2); // Faster erase
    } else {
      // Pause before deleting or moving to next skill
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before erasing
      } else {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        setTimeout(type, 500); // Pause before typing next
      }
    }
  }

  // Start typing
  type();