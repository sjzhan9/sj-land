import {Client} from '@notionhq/client'

export default function Test(portfolioListList) {
    console.log(portfolioListList);
    return (
        <p>
            test 
        </p>

        
    )
};


export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
  
    const alchemy_notion = new Client({ auth: process.env.ALCHEMOTION_API_KEY});

  const portfolioListResponse = await alchemy_notion.databases.query({
    database_id: process.env.NOTION_PORTFOLIOLIST_ID,
    sorts: [
      {
        property: "Created",
        direction: "descending",
      },
    ],
    page_size: 8,
  });
  
  
    if(!portfolioListResponse) {
        return {
            notFound: true,
        }
    }
    return {
      props: {
        portfolioListList: portfolioListResponse.results,
      },
      revalidate: 5,
    };
  }
  
  
  