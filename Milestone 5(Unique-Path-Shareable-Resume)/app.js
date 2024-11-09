var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var cvform = document.querySelector("#cv-form");
var skillBtn = document.querySelector("#skills-btn");
var skillList = document.querySelector(".skills");
var editbtn = document.getElementById("edit");
var cvTemplate = document.getElementById("cv-template");
var sharebtn = document.getElementById("share-btn");
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
    var jobTitle = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;
    var jobDescription = document.getElementById("job-description").value;
    var profession = document.getElementById("professionField").value;
    var about = document.getElementById("aboutField").value;
    // links
    var Github = document.getElementById("GithubField").value;
    var linkedin = document.getElementById("linkedinField").value;
    document.getElementById("currentlyT").textContent = currently_live;
    document.getElementById("DOBT").textContent = DOB;
    document.getElementById("nameT").textContent = name;
    document.getElementById("contactT").textContent = phone;
    document.getElementById("emailT").textContent = email;
    document.getElementById("addressT").textContent = address;
    document.getElementById("aboutT").textContent = about;
    // School
    document.getElementById("display-degree").textContent = degree;
    document.getElementById("display-institution").textContent = institution;
    document.getElementById("display-graduation-start").textContent = graduationDateStart;
    document.getElementById("display-graduation-end").textContent = graduationDateEnd;
    document.getElementById("LinkedInT").textContent = linkedin;
    document.getElementById("githubT").textContent = Github;
    document.getElementById("display-job-title").textContent = jobTitle;
    document.getElementById("display-company").textContent = company;
    document.getElementById("display-start-date").textContent = startDate;
    document.getElementById("display-end-date").textContent = endDate;
    document.getElementById("display-discription").textContent = jobDescription;
    document.getElementById("professionT").textContent = profession;
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
    var names = document.getElementById("nameField");
    // shareable link
    sharebtn.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var shareableLink, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    shareableLink = "https://milestone5-unique-path-and-shareable-link-ayesha.vercel.app/?username.value/".concat(names.value.replace(/\s+/g, '_'));
                    return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                case 1:
                    _a.sent();
                    alert("Shareable linkcopied to Clipboard!");
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    alert("Failed to copy link clipboard . please try again!");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
});
function printCV() {
    window.print();
}
editbtn === null || editbtn === void 0 ? void 0 : editbtn.addEventListener("click", function () {
    cvform.style.display = "block";
    cvTemplate.style.display = "none";
});
