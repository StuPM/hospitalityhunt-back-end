const queries = {
  addUser: (email, password, isFreelancer) => {
    return `INSERT INTO users (email, password, type)
                    VALUES ("${email}", "${password}", "${isFreelancer}")`;
  },
  addBusiness: (o) => {
    return `INSERT INTO businesses (user_id, name, phone_number, details)        
              VALUES ("${o.id}",
                      "${o.name}",
                      "${o.phoneNumber}",
                      "${o.details}");`;
  },
  checkEmailAndPassword: (email, sha256Password) => {
    return `SELECT count(email) AS count, users.id FROM users
              WHERE email = "${email}" 
              AND password = "${sha256Password}";`;
  },
  setOnboardingType: (email, type) => {
    return `UPDATE users 
              SET type=${type}
                WHERE email="${email}";`;
  },
  addFreelancer: (o) => {
    return `INSERT INTO freelancers (
                                user_id,
                                first_name,
                                second_name,
                                experience,
                                skills,
                                post_code, 
                                phone_number, 
                                image,
                                about_you,
                                lat,
                                lon)        
                            VALUES (
                                    "${o.userId}",
                                    "${o.firstName}",
                                    "${o.secondName}",
                                    "${o.experience}",
                                    "${o.skills}",
                                    "${o.postCode}",
                                    "${o.phoneNumber}",
                                    "${o.image}",
                                    "${o.aboutYou}",
                                    "${o.lat}",
                                    "${o.lon}")`;
  },

  addToken: (token, id) => {
    return `INSERT INTO tokens
    (token, user_id)
        VALUES
            ("${token}", "${id}");`;
  },
  updateFreelancer: (o) => {
    return `UPDATE freelancers
                    SET first_name = "${o.firstName}", 
                        second_name = "${o.secondName}", 
                        phone_number = "${o.phoneNumber}", 
                        post_code = "${o.postCode}", 
                        experience = "${o.experience}", 
                        skills = "${o.skills}", 
                        about_you = "${o.aboutYou}", 
                        image = "${o.image}"
                            WHERE user_id = "${o.user_id}"`;
  },
  updateBusiness: (o) => {
    return `UPDATE businesses
                    SET name='${o.name}',
                        phone_number='${o.phoneNumber}',
                        details='${o.details}'
                            WHERE id = '${o.id}';`;
  },

  deleteBusinessTypes: (businessId) => {
    return `DELETE FROM business_types_businesses
                    WHERE business_id = ${businessId};`;
  },

  addBusinessTypes: (businessId, businessTypesId) => {
    return `INSERT INTO business_types_businesses
                    (business_id, business_types_id)
                        VALUES ('${businessId}','${businessTypesId}');`;
  },
  getBusinessTypes: (businessId) => {
    return `SELECT business_types.name from business_types
    JOIN business_types_businesses
    ON business_types.id = business_types_businesses.id
    WHERE business_types_businesses.business_id = ${businessId};`;
  },
  getBusinessTypesFromJobListing: (user_id) => {
    return `SELECT name FROM business_types_businesses
              JOIN business_types ON
              business_types_businesses.business_types_id = business_types.id
              WHERE business_id = ${user_id};`;
  },
  getIndividualBusinessType: (typeName) => {
    return `SELECT id from business_types
              WHERE name = '${typeName}';`;
  },
  addJobListing: (o) => {
    return `INSERT INTO job_listings (name, 
                                          salary, 
                                          post_code, 
                                          phone_number, 
                                          description)
                VALUES ("${o.name}",
                        "${o.salary}",
                        "${o.postCode}",
                        "${o.phoneNumber}",
                        "${o.description}")`;
  },
  deleteJobListing: (id) => {
    return `DELETE FROM job_listings       
              WHERE id = "${id}";`;
  },
  getBusinesses: () => {
    return "SELECT id, name, phone_number as phoneNumber, details FROM `businesses`;";
  },
  getFreelancers: () => {
    return `SELECT user_id, 
                   first_name AS firstName,
                   second_name AS secondName,
                   experience,
                   skills,
                   post_code AS postCode,
                   phone_number AS phoneNumber,
                   image,
                   about_you AS aboutYou,
                   lat,
                   lon
                   FROM freelancers;`;
  },
  getJobListing: (id) => {
    return `SELECT id, 
                   name, 
                   salary,  
                   post_code AS postCode,
                   phone_number AS phoneNumber, 
                   description
                      FROM job_listings 
                        WHERE id = '${id}';`;
  },
  getJobListings: () => {
    return `SELECT user_id, 
                   job_listings.id,
                   job_listings.name AS name,
                   contracts.name AS contract,
                   salary,
                   post_code AS postCode,
                   phone_number AS phoneNumber, 
                   description
                   FROM job_listings 
    JOIN contracts ON job_listings.contract_id = contracts.id;`;
  },
  getFreelancerPostions: (user_id) => {
    return `SELECT name FROM positions_freelancers
                                JOIN positions ON
                                  positions_freelancers.position_id = positions.id
                                    WHERE freelancer_id = ${user_id};`;
  },
  getFreelancerContracts: (user_id) => {
    return `SELECT name FROM contracts_freelancers
                                          JOIN contracts ON
                                            contracts_freelancers.contract_id = contracts.id
                                              WHERE freelancer_id = ${user_id};`;
  },
  deleteToken: (token) => {
    return `DELETE FROM tokens       
              WHERE token = "${token}";`;
  },
};

module.exports = queries;
