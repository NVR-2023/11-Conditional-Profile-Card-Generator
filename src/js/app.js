import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>
          <span style="color: ${
            variables.name ? "black" : "grey"
          }; font-style: ${variables.name ? "normal" : "italic"}">
            ${variables.name ? variables.name : "<i>Your name</i>"}
          </span>
          <span style="color: ${
            variables.lastname ? "black" : "grey"
          }; font-style: ${variables.lastname ? "normal" : "italic"}">
            ${
              variables.lastname ? variables.lastname : "<i>&amp; last name</i>"
            }
          </span>
        </h1>          
        <h2 style="color: ${variables.role ? "black" : "gray"}; font-style: ${
    variables.role ? "normal" : "italic"
  };">
          ${variables.role ? variables.role : "Your role"}
        </h2>
        <h3>
          ${
            variables.city
              ? `<span style="color: black">${variables.city}</span>`
              : `<i><span style="color: grey">Your city</span></i>`
          }
          ${variables.city && variables.country ? "," : ""}
          ${
            variables.country
              ? `<span style="color: black">${variables.country}</span>`
              : `<i><span style="color: grey">& country</span></i>`
          }
        </h3>
      <ul class="${variables.socialMediaPosition}">
            <li><a href="${
              variables.twitter ? variables.twitter : "https://twitter.com/"
            }"><i class="fab fa-twitter fa-xs"></i></a></li>
            <li><a href="${
              variables.github ? variables.github : "https://github.com/"
            }"><i class="fab fa-github fa-xs"></i></a></li>
            <li><a href="${
              variables.linkedin ? variables.linkedin : "https://www.linkedin.com/"
            }"><i class="fab fa-linkedin fa-xs"></i></a></li>
            <li><a href="${
              variables.instagram ? variables.instagram : "https://www.instagram.com/"
            }"><i class="fab fa-instagram fa-xs"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
