class SchoolIndex
{

  constructor() {
    this.index = require("./Schools.json");
  }

  async getAllSchools(limit) {
    let schools = [];

    if (!limit) limit = this.index.length;
    if (limit > this.index.length) limit = this.index.length

    for (let i = 0; i < limit; i++)
      schools.push(this.index[i]);

    return schools;
  }

  async getSchoolByCode(code) {

    let founded = false;
    let school = {};

    for (let i = 0; i < this.index.length && !founded; i++) {
      if (this.index[i].ccodice_scuola.toUpperCase() == code.toUpperCase()) {
        founded = true;
        school = this.index[i];
      }
    }

    return school;
  }

  async getSchoolsByRegion(region, limit) {
    let schools = [];

    if (!limit) limit = this.index.length;
    if (limit > this.index.length) limit = this.index.length

    for (let i = 0; i < this.index.length && i < limit; i++) {
      if (this.index[i].cistat_reg.toUpperCase() == region.toUpperCase()) {
        school.push(this.index[i]);
      }
    }

    return schools;
  }

  async getSchoolsByDistrict(district, limit) {
    let schools = [];

    if (!limit) limit = this.index.length;
    if (limit > this.index.length) limit = this.index.length

    for (let i = 0; i < this.index.length && i < limit; i++) {
      if (this.index[i].cistat_prov.toUpperCase() == district.toUpperCase()) {
        schools.push(this.index[i]);
      }
    }

    return schools;
  }

  async getSchoolsByCity(city, limit) {
    let schools = [];

    if (!limit) limit = this.index.length;
    if (limit > this.index.length) limit = this.index.length

    for (let i = 0; i < this.index.length && i < limit; i++) {
      if (this.index[i].cistat_com.toUpperCase() == city.toUpperCase()) {
        schools.push(this.index[i]);
      }
    }

    return schools;
  }

  async getSchoolsByCap(cap, limit) {
    let schools = [];

    if (!limit) limit = this.index.length;
    if (limit > this.index.length) limit = this.index.length

    for (let i = 0; i < this.index.length && i < limit; i++) {
      if (this.index[i].ccap == cap) {
        schools.push(this.index[i]);
      }
    }

    return schools;
  }
}

module.exports.SchoolIndex = SchoolIndex;