// show api data in console

const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhone(phones);
};

// call a function for showing in card

const displayPhone = (phones) => {
  // console.log(phones);

  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  phones.forEach((phone) => {
    console.log(phone);

    // create a div

    const phoneCard = document.createElement("div");
    phoneCard.classList = `card w-auto bg-base-100 shadow-xl`;
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
                <button class="btn btn-primary">Show Details</button>
              </div>
            </div>
    `;

    phoneContainer.appendChild(phoneCard);
  });
};

// search btn call

const handleSearch = () => {
  // console.log("search clicked...")
  const inputField = document.getElementById("input-field");
  const searchText = inputField.value;
  console.log(searchText);
  loadPhone(searchText);
};

// call the function

// loadPhone();
