// show api data in console

const loadPhone = async (searchText = "13", isShowAll) => {
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
                <button onclick="handleShowDetails('${phone.slug}')" class="btn bg-[#00BBA6] hover:bg-[#00BBA6] text-white">Show Details</button>
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

// show details btn

const handleShowDetails = async (id) => {
  console.log("Clicked", id);

  // show all data about phone
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;

  showPhoneDetails(phone);
};

// shoe details modal function

const showPhoneDetails = (phone) => {
  console.log(phone);
  // const phoneName = document.getElementById("phone-detail-name");
  // phoneName.innerText = phone.name;

  const showDetailsContainer = document.getElementById(
    "show-details-container"
  );
  showDetailsContainer.innerHTML = `
  
  <div class="card bg-base-100">
      <figure class="px-10 pt-10 bg-[#ECFEFF]">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl mb-10" />
      </figure>
      <div class="card-body items-start text-start">
        <h2 class="card-title font-extrabold">${phone.name}</h2>
        <p><span class="font-extrabold">Storage : </span>${phone.mainFeatures.storage}</p>
        <p><span class="font-extrabold">Display Size : </span>${phone.mainFeatures.displaySize}</p>
        <p><span class="font-extrabold">Chipset : </span>${phone.mainFeatures.chipSet}</p>
        <p><span class="font-extrabold">Memory : </span>${phone.mainFeatures.memory}</p>
        <!-- <p><span>Storage:</span>${phone.storage}</p> -->
        <!-- <p><span>Storage:</span>${phone.storage}</p> -->
        <!-- <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div> -->
      </div>
    </div>
  
  `;

  // display the modal

  show_details_modal.showModal();
};

loadPhone();
