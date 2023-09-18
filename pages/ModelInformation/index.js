import Head from "next/head";
function ModelInfo() {
    return (

    <div className="border-gray-200 border-solid border-2 shadow-lg rounded-lg p-7">
        <Head><title>Model information</title></Head>
    <div className="w-[70%] pt-[20px] m-auto ">
        <p className="font-semibold text-gray-800">
            In this project, we created a Customer-Bank-Churn prediction model. Firstly, we use :
            FLASK (Python) as a backend.
            <br />
            <br />
            NextJS as a frontend.
            Javascript to fetch FLASK API, and
            Postman to test FLASK API.
            <br />
            <br />
            We used a Kaggle dataset, read CSV files using Python's library and defined multiple functionalities. Created a FLASK API, deployed it on Vercel and integrated the nextJS frontend by fetching the FLASK API using Javascript.
            <br />
            <br />
            We normalized the Kaggle dataset and then trained it on the Logistic Regression model. We even tested the FLASK API on POSTMAN to check if it works perfectly.
            <br />
            <br />
            We also provide the custom client prediction so that the customer can enter their information, and our pre-trained model will predict whether the customer will exit the bank or not.
        </p>
        <div className="bg-purple-500 mt-3  p-2">
            <div className="p-1">
            <img  src="/images/wi1.jpg"/>
            </div>
            <div className="p-1">
            <img  src="/images/wi2.jpg"/>
            </div>
        </div>
    </div>
    </div>
    );
}
export default ModelInfo;