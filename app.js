// show api data in console

const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhone(phones, isShowAll);
};

// call a function for showing in card

const displayPhone = (phones, isShowAll) => {
  // console.log(phones);

  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";

  // display show all btn if there more phone
  const showAllBtn = document.getElementById("show-all-btn");
  if (phones.length > 12 && !isShowAll) {
    showAllBtn.classList.remove("hidden");
  } else {
    showAllBtn.classList.add("hidden");
  }

  //  console.log(phones.length)
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    console.log(phone);

    // create a div

    const phoneCard = document.createElement("div");
    phoneCard.classList = `card w-auto bg-cyan-50 shadow-xl`;
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
              <img
                src="${phone.image}"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
                <button class="btn bg-[#00BBA6] hover:bg-[#00BBA6] text-white">Show Details</button>
              </div>
            </div>
    `;

    phoneContainer.appendChild(phoneCard);
  });

  // hide loading btn

  loadingSpinner(false);
};

// search btn call

const handleSearch = (isShowAll) => {
  loadingSpinner(true);
  // console.log("search clicked...")
  const inputField = document.getElementById("input-field");
  const searchText = inputField.value;
  console.log(searchText);
  loadPhone(searchText, isShowAll);
};

const loadingSpinner = (isLoading) => {
  const takeLoader = document.getElementById("loader");
  if (isLoading) {
    takeLoader.classList.remove("hidden");
  } else {
    takeLoader.classList.add("hidden");
  }
};

// handle show all btn

const handleShowAllBtn = () => {
  handleSearch(true);
};
// call the function

// loadPhone();
