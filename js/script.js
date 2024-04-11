// MILESTONE 0

// definisco un array di oggetti, ogni oggetto rappresenta un membro del team con tutti i suoi dati

const team = [
    {
        name: "Wayne Barnett",
        profession: "Founder & CEO",
        pic: "wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Angela Caroll",
        profession: "Chief Editor",
        pic: "angela-caroll-chief-editor.jpg",
    },

    {
        name: "Walter Gordon",
        profession: "Office Manager",
        pic: "walter-gordon-office-manager.jpg",
    },

    {
        name: "Angela Lopez",
        profession: "Social Media Manager",
        pic: "angela-lopez-social-media-manager.jpg",
    },

    {
        name: "Scott Estrada",
        profession: "Developer",
        pic: "scott-estrada-developer.jpg",
    },


    {
        name: "Barbara Ramos",
        profession: "Graphic Designer",
        pic: "barbara-ramos-graphic-designer.jpg",
    }


];

console.log(team);

// MILESTONE 1

// stampo su console le informazioni dei mebri del team

const teamRow = document.getElementById("team-cards");

for (let i = 0; i < team.length; i++) {
    const curTeam = team[i];  // object
    console.log(curTeam);
    // stampo utilizzando dot.notation

    console.log(curTeam.name);
    console.log(curTeam.profession);
    console.log(curTeam.pic);
    // MILESTONE 3
    // stampo in pagina le informazioni

    teamRow.innerHTML += `

    <div class="card">
        <h2 class="name">${curTeam.name}</h2>
        <h3 class="profession">${curTeam.profession}</h3>
        <img src="img/${curTeam.pic}" alt="team">
    </div>
    `
}

