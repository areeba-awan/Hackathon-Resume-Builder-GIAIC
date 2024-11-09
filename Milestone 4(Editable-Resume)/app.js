var cvform = document.querySelector("#cv-form");
var skillBtn = document.querySelector("#skills-btn");
var skillList = document.querySelector(".skills");
var editbtn = document.getElementById("edit");
var cvTemplate = document.getElementById("cv-template");
skillBtn.innerHTML = "Hide Skills";
skillBtn === null || skillBtn === void 0 ? void 0 : skillBtn.addEventListener("click", function () {
    if (skillList.style.display === "none" || !skillList.style.display) {
        skillBtn.innerHTML = "Hide Skills";
        skillList.style.display = "block";
    }
    else {
        skillList.style.display = "none";
        skillBtn.innerHTML = "Show Skills";
    }
});
cvform === null || cvform === void 0 ? void 0 : cvform.addEventListener("submit", function (e) {
    var _a, _b;
    e.preventDefault();
    var name = document.getElementById("nameField").value;
    var currently_live = document.getElementById("currently_live").value;
    var DOB = document.getElementById("dateField").value;
    var phone = document.getElementById("contactField").value;
    var email = document.getElementById("emailField").value;
    var address = document.getElementById("addressField").value;
    // School
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationDateStart = document.getElementById("graduation-date-start").value;
    var graduationDateEnd = document.getElementById("graduation-date-end").value;
    // College
    // const degree2 = (document.getElementById("degree2") as HTMLInputElement).value;
    // const institution2 = (document.getElementById("institution2") as HTMLInputElement).value;
    // const collegeDateStart = (document.getElementById("college-end-date") as HTMLInputElement).value;
    // const collegeDateEnd = (document.getElementById("college-start-date") as HTMLInputElement).value;
    var jobTitle = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;
    var jobDescription = document.getElementById("job-description").value;
    // links
    var Github = document.getElementById("GithubField").value;
    var linkedin = document.getElementById("linkedinField").value;
    document.getElementById("currentlyT").textContent = currently_live;
    document.getElementById("DOBT").textContent = DOB;
    document.getElementById("nameT").textContent = name;
    document.getElementById("contactT").textContent = phone;
    document.getElementById("emailT").textContent = email;
    document.getElementById("addressT").textContent = address;
    // School
    document.getElementById("display-degree").textContent = degree;
    document.getElementById("display-institution").textContent = institution;
    document.getElementById("display-graduation-start").textContent = graduationDateStart;
    document.getElementById("display-graduation-end").textContent = graduationDateEnd;
    // College
    // (document.getElementById("display-degree2") as HTMLElement).textContent = degree2;
    // (document.getElementById("display-institution2") as HTMLElement).textContent = institution2;
    // (document.getElementById("display-graduation-start2") as HTMLElement).textContent = collegeDateStart;
    // (document.getElementById("display-graduation-end2") as HTMLElement).textContent = collegeDateEnd;
    document.getElementById("LinkedInT").textContent = linkedin;
    document.getElementById("githubT").textContent = Github;
    document.getElementById("display-job-title").textContent = jobTitle;
    document.getElementById("display-company").textContent = company;
    document.getElementById("display-start-date").textContent = startDate;
    document.getElementById("display-end-date").textContent = endDate;
    document.getElementById("display-discription").textContent = jobDescription;
    // ******* Skills *********
    var skills = document.getElementsByClassName("sfield");
    var skillsStr = "";
    for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
        var e_1 = skills_1[_i];
        var entries = e_1.value.split(",");
        for (var _c = 0, entries_1 = entries; _c < entries_1.length; _c++) {
            var entry = entries_1[_c];
            skillsStr += "<li>".concat(entry.trim(), "</li>");
        }
    }
    document.getElementById("skillT").innerHTML = skillsStr;
    // **** Setting Image ****
    var fileInput = (_a = document.getElementById("imageField").files) === null || _a === void 0 ? void 0 : _a[0];
    if (fileInput) {
        var reader_1 = new FileReader();
        reader_1.onloadend = function () { return document.getElementById("imgTemplate").src = reader_1.result; };
        reader_1.readAsDataURL(fileInput);
    }
    // **** Setting Image ****
    var fileInput2 = (_b = document.getElementById("imageField").files) === null || _b === void 0 ? void 0 : _b[0];
    if (fileInput2) {
        var reader_2 = new FileReader();
        reader_2.onloadend = function () { return document.getElementById("imgTemplate-hide").src = reader_2.result; };
        reader_2.readAsDataURL(fileInput2);
    }
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
});
function printCV() {
    window.print();
}
editbtn === null || editbtn === void 0 ? void 0 : editbtn.addEventListener("click", function () {
    cvform.style.display = "block";
    cvTemplate.style.display = "none";
});
