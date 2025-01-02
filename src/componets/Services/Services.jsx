import React from 'react'
import ArrowButton from '../ArrowButton';
import PageMainHeading from '../PageMainHeading';
import Card1 from './widgets/Card1';
import Card2 from './widgets/Card2';
import Card3 from './widgets/Card3';
import Card4 from './widgets/Card4';
import Card5 from './widgets/Card5';
import Card6 from './widgets/Card6';
import Card7 from './widgets/Card7';
import Card8 from './widgets/Card8';
import Card9 from './widgets/Card9';
import Card10 from './widgets/Card10';
import Card11 from './widgets/Card11';
import WorkTogether from '../WorkTogether/WorkToGether';


const servicess = () => {
    const servicess = [
        {
          id: 1,
          title: "Logo Design",
          image: "./assets/services/card.png",
        },
        {
          id: 2,
          title: "UI/UX Design",
          image1: "./assets/services/card2-left.png",
          image2: "./assets/services/card2-right.png",
        },
        {
          id: 3,
          title: "CMS/Wordpress",
          image: "./assets/services/card3.png",
        },
        {
          id: 4,
          title: "Shopify/Webstore",
          image: "./assets/services/card4.png",
        },
        {
          id: 5,
          title: "Custom Website",
          image1: "./assets/services/card5-left.png",
          image2: "./assets/services/card5-right.png",
        },
        {
          id: 6,
          title: "Custom Application",
          image1: "./assets/services/card6-left.png",
          image2: "./assets/services/card6-center.png",
          image3: "./assets/services/card6-right.png",
        },
        // section 2
        {
          id: 7,
          title: "Woocommerce",
          image1: "./assets/services/card7-left.png",
          image2: "./assets/services/card7-right.png",

        },
        {
          id: 8,
          title: "Stationary",
          image1: "./assets/services/card8.png",

        },
        {
          id: 9,
          title: "Book Cover",
          image1: "./assets/services/card9-left.png",
          image2: "./assets/services/card9-center.png",
          image3: "./assets/services/card9-right.png",
        },
        {
          id: 10,
          title: "Thumbnail",
          image1: "./assets/services/card10-top.png",
          image2: "./assets/services/card10-middle.png",
          image3: "./assets/services/card10-bottom.png",
        },
        {
          id: 11,
          title: "Businesses Branding",
          image1: "./assets/services/card11-left.png",
          image2: "./assets/services/card11-right.png",

        },
      ];

      return (
     <>
     <PageMainHeading text={'services'}/>
        <section className=" py-16 px-1   min-h-[63rem] bg-bottom bg-cover bg-no-repeat mt-[6rem]">
          <div className="max-width max-[682px]:px-[.5rem] px-[2rem] text-center h-full ">

            {/* Cards Grid */}
            <div  className=" grid grid-cols-4 gap-6 max-[1053px]:grid-cols-2 max-[650px]:grid-cols-1 max-[650px]:gap-3"
            >
                {/* card-1 */}
              <Card1 key={servicess[0].id} index={0} title={servicess[0].title} image={servicess[0].image}  className={'col-span-1 max-[650px]:col-span-1'}/>
                {/* card-2 */}
              <Card2 key={servicess[1].id} index={1} title={servicess[1].title} image1={servicess[1].image1} image2={servicess[1].image2}  className={'col-span-1 max-[650px]:col-span-1'}/>
                {/* card-3 */}
              <Card3 key={servicess[2].key} index={2} title={servicess[2].title} image={servicess[2].image}  className={'col-span-1 max-[650px]:col-span-1'}/>
                {/* card-4 */}
              <Card4 key={servicess[3].key} index={3} title={servicess[3].title} image={servicess[3].image}  className={'col-span-1 max-[650px]:col-span-1'}/>
                {/* card-5 */}
              <Card5 key={servicess[4].id} index={4} title={servicess[4].title} image1={servicess[4].image1} image2={servicess[4].image2}  className={'col-span-2 max-[650px]:col-span-1'}/>
                {/* card-6 */}
              <Card6 key={servicess[5].id} index={5} title={servicess[5].title} image1={servicess[5].image1} image2={servicess[5].image2} image3={servicess[5].image3} className={'col-span-2 max-[650px]:col-span-1'}/>


{/* section -2 */}
            </div>
 <div  className=" grid grid-cols-6 gap-6 max-[1053px]:grid-cols-2 max-[650px]:grid-cols-1 max-[650px]:gap-3 mt-[1.8rem]">
   {/* card-7 */}
   <Card7 key={servicess[6].id} index={6} title={servicess[6].title} image1={servicess[6].image1} image2={servicess[6].image2}  className={'col-span-2 max-[650px]:col-span-1'}/>
                {/* card-8 */}
              <Card8 key={servicess[7].id} index={7} title={servicess[7].title} image={servicess[7].image1}  className={'col-span-2 max-[650px]:col-span-1'}/>
                {/* card-9 */}
              <Card9 key={servicess[8].id} index={8} title={servicess[8].title} image1={servicess[8].image1} image2={servicess[8].image2} image3={servicess[8].image3}  className={'col-span-2 max-[650px]:col-span-1'}/>
                {/* card-10 */}
              <Card10 key={servicess[9].id} index={9} title={servicess[9].title} image1={servicess[9].image1} image2={servicess[9].image2} image3={servicess[9].image3}  className={'col-span-3 max-[650px]:col-span-1'}/>
                {/* card-11 */}
              <Card11 key={servicess[10].id} index={10} title={servicess[10].title} image1={servicess[10].image1} image2={servicess[10].image2}  className={'col-span-3 max-[650px]:col-span-1'}/>
 </div>

          <div className="mt-[10rem]">
          <WorkTogether/>
          </div>
          </div>
        </section>
     </>
      );
}

export default servicess
