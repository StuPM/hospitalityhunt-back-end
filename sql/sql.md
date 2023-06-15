SELECT email,first_name,post_code,name FROM users
JOIN freelancers ON users.id = freelancers.user_id
JOIN positions_freelancers ON freelancers.user_id = positions_freelancers.freelancer_id
JOIN positions ON positions_freelancers.position_id = positions.id;

SELECT email FROM users
JOIN freelancers ON users.id = freelancers.user_id
JOIN contracts_freelancers ON freelancers.user_id = contracts_freelancers.freelancer_id
JOIN contracts ON contracts_freelancers.contract_id = contracts.id;

SELECT email FROM users
JOIN businesses ON users.id = businesses.user_id
JOIN business_types_businesses ON businesses.user_id = business_types_businesses.business_id
JOIN business_types ON business_types_businesses.business_types_id = business_types.id;

SELECT email FROM users
JOIN businesses ON users.id = businesses.user_id
JOIN contracts_businesses ON businesses.user_id = contracts_businesses.business_id
JOIN contracts ON contracts_businesses.contract_id = contracts.id;

SELECT email FROM users
JOIN businesses ON users.id = businesses.user_id
JOIN positions_businesses ON businesses.user_id = positions_businesses.business_id
JOIN positions ON positions_businesses.position_id = positions.id;

SELECT email FROM users
JOIN job_listings ON users.id = job_listings.user_id
JOIN contracts_job_listings ON job_listings.id = contracts_job_listings.job_listing_id
JOIN contracts ON contracts_job_listings.contract_id = contracts.id;

# Notes of queries needed to create

## everyone - add sample data

Bernie - 1. Insert a new user, when a user creates an account, 1.1 Ability to store user or business.
Stuart - 2. Check if a user or email is valid
Dan - 3. Get all the freelancers
Yahya - 4. Get all the job listings
Yusuf - 5. Get all the businesses
Amelia - 6. Add a freelancer
Bernie - 7. Add a job listing
Yusuf - 8. Add a business
Bernie - 9. Edit a freelancer
Yahya - 10. Edit a job listing
Stuart - 11. Edit a business
//Update name, phone number and business details.
//Insert the new business types
Dan - 12. Allow a business to delete one of their listings
Amelia - 13. Add a token in the database (as part of login)
Bernie - 14. Check if a token is valid
Dan - 15. Extract one listing
Bernie - 16. Logout - removing the user token
