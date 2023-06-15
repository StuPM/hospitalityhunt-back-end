INSERT INTO `businesses` (`id`, `name`, `phone_number`, `details`) VALUES
(1, 'Burger Queen', '09777657753', 'The most famous burger restaurant in UK'),
(2, 'Hey Sushi', '06751325534', 'More than 20 stores over London'),
(3, 'The Red Lion', '097567349965', 'A night pub open at 20:00');

INSERT INTO `business_types_businesses` (`id`, `business_id`, `business_types_id`) VALUES
(1, 1, 1),
(2, 1, 1),
(3, 2, 1),
(4, 2, 5),
(5, 3, 2);

INSERT INTO `job_listings`
(`user_id`, `name`, `salary`, `post_code`, `phone_number`, `description`) 
VALUES 
(1,'London Sushi','10h/r','N4 7HA','03232435342','This position is to fill in for a waiter on leave. You will be covering weekend shifts and tuesdays'),
(1,'The Red Lion','13.5/hr','S2 3TR','09797965565','Provide a high level of customer service at all times'),
(2,'The Steakhouse','11/hr','SE11 5EQ','04433223344','Experience of working within, or a desire to work within a high-end restaurant'),
(3,'The Kings Head','12/hr','SE28 0PB','01234565434','40hrs in a week, time slot: 18:00-02:00 / 22:00-06:00');