export const getDonor = () => {
    const saved = localStorage.getItem("donor");
    return saved
      ? JSON.parse(saved)
      : {
          name: "John Smith",
          email: "johnsmith@donor.com",
          phone: "+1234-567-8900",
          bloodGroup: "O+",
          lastDonation: "Sep 15, 2024",
          photo: "https://i.pravatar.cc/100"
        };
  };
  
  export const saveDonor = (donor) => {
    localStorage.setItem("donor", JSON.stringify(donor));
  };
  