$(document).ready(function(){

    // Images of our works section
    images = ['1.jpg', '2.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.png', '12.jpg', 
    '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg', '18.jpeg'];
    fill_works();

    testimonial = ['Testimonial 1 ', 'Testimonial 2', 'Testimonial 3', 'Testimonial 4'];
    reviews = [
                'Thanks, Anita for the beautiful setup and replicating the exact designs and giving us a wonderful experience. Really loved the way you personally handled everything. Thanks again! Amazing experience we have had together look forward to many more. And absolutely loved the finesse with which the decor was managed despite the last-minute modification. ',
                'Anita!! Thank you so so much for all the work and arrangements that you put into making our Mehendi and Sangeet day really special. The venue was fabulous and many people commented on the ambience and the organization with high quality. We have fantastic memories to see us in married life. Thanks for your part in that. Anita is very motivational and professional with her work and very friendly - everything we experienced was exceptional. The staff was also very efficient and polite.',
                'Thank you so much for all your hard work, your flexibility and diligence in pulling together a very successful event of Health is Wealth Day (Sports Day 2017-18) for our little tiny toes of Eurokids Jayanagar 5th Block Centre. We’ve had great feedback from our parents and teachers alike, it has been considered a massively successful event by involving our energetic parents into games and activities. That’s quite an achievement given the complexity of what we pulled together. It was a pleasure working with you. We hope to have the opportunity to work with you again in the future.',
                'You are definitely my go-to person for any of my events in the future! Cos you understood what I wanted, and not just personal, even office wala :) and I am not saying this just to please you. I saw the extent you go to make your clients happy, love that about you the most.',
                ];
    review_by = ['Mr. Sarvesh Salarpuria', 'Ms. Chaitra', 'Mr. Ashok Kumar <br> Director, Eurokids, Jayanagar, 5th Block.', 'Mr. Hemanth'];
    fill_reviews(testimonial, reviews, review_by);
});
