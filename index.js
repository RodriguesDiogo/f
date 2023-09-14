document.addEventListener("DOMContentLoaded", function() {
  const styleSheet = document.styleSheets[0];

  function createCSSRule(selector, styles) {
    const ruleText = `${selector} { ${styles} }`;
    styleSheet.insertRule(ruleText, styleSheet.cssRules.length);
  }

  const boxColor1 = document.querySelector(".box-color1");
  const boxColor2 = document.querySelector(".box-color2");

  
      // Add hover event listeners for .box-color1
      boxColor1.addEventListener("mouseenter", function() {
          createCSSRule(".box-color1", "background-color: blue; color: red; width: 50%; height: 100%;");
          createCSSRule(".box-color2", "background-color: red; color: blue; width: 50%; height: 100%;");
      });

      // Add hover event listeners for .box-color2
      boxColor2.addEventListener("mouseenter", function() {
          createCSSRule(".box-color1", "background-color: red; color: blue; width: 50%; height: 100%;");
          createCSSRule(".box-color2", "background-color: blue; color: red; width: 50%; height: 100%;");  
      });
  
});

