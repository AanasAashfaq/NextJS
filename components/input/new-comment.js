import { useRef, useState } from 'react';
import classes from './new-comment.module.css';

function NewComment(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);


  const [data, setdata] = useState('');
  const creditScoreRef = useRef();
  const ageRef = useRef([]);
  const tenureRef = useRef();
  const balanceRef = useRef();
  const salaryRef = useRef();
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);
  const [hasCredit, sethasCredit] = useState();
  const [isActive, setisActive] = useState();
  const [numOfProducts, setNumOfProducts] = useState({
    Products_1: 0,
    Products_2: 0,
    Products_3: 0,
    Products_4: 0,
  });

  const [location, setLocation] = useState({
    France: 0,
    Spain: 0,
    Germany: 0,
  });


  const handleNumOfProductsChange = (event) => {
    const selectedProduct = event.target.value;
    const updatedNumOfProducts = {
      Products_1: 0,
      Products_2: 0,
      Products_3: 0,
      Products_4: 0,
    };
    updatedNumOfProducts[`Products_${selectedProduct}`] = 1;
    setNumOfProducts(updatedNumOfProducts);
  };
  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    const updatedLocation = {
      France: 0,
      Spain: 0,
      Germany: 0,
    };
    updatedLocation[selectedLocation] = 1;
    setLocation(updatedLocation);
  };
  // Add event handlers to update the state based on user selection
  const handleMaleSelect = () => {
    setMale(1);
    setFemale(0);
  };

  const handleFemaleSelect = () => {
    setMale(0);
    setFemale(1);
  };
  const handleCreditCardChange = (event) => {
    sethasCredit(event.target.value === "yes" ? 1 : 0);
  };
  const handleActiveChange = (event) => {
    setisActive(event.target.value === "yes" ? 1 : 0);
  };

  async function submitHanlder(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log("Button Triggered")
    const creditScore = [parseInt(creditScoreRef.current.value)];
    const ageF = [parseInt(ageRef.current.value)]
    const tenureF = [parseInt(tenureRef.current.value)]
    const balanceF = [parseInt(balanceRef.current.value)];
    const hasCreditCaard = [parseInt(hasCredit)]
    const isActiveF = [parseInt(isActive)]
    const maleF = [parseInt(male)];
    const femaleF = [parseInt(female)];
    const salary = [parseInt(salaryRef.current.value)]
    const product1 = [numOfProducts.Products_1];
    const product2 = [numOfProducts.Products_2];
    const product3 = [numOfProducts.Products_3];
    const product4 = [numOfProducts.Products_4];
    const france = [parseInt(location.France)]
    const germany = [parseInt(location.Germany)]
    const spain = [parseInt(location.Spain)]
    const data = {
      // creditScore,ageF,tenureF,balanceF,hasCreditCaard,isActiveF,m: maleF,f: femaleF,numOfProducts,location
      "Unnamed": [1],
      "CreditScore": creditScore,
      "Age": ageF,
      "Tenure": tenureF,
      "Balance": balanceF,
      "HasCrCard": hasCreditCaard,
      "IsActiveMember": isActiveF,
      "EstimatedSalary": salary,
      "Male": maleF,
      "Female": femaleF,
      "NumOfProducts_1": product1,
      "NumOfProducts_3": product3,
      "NumOfProducts_2": product2,
      "NumOfProducts_4": product4,
      "France": france,
      "Spain": spain,
      "Germany": germany,
    }
    console.log(data);
    try {
      const response = await fetch('https://python-flaks.vercel.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "Unnamed": [1],
          "CreditScore": creditScore,
          "Age": ageF,
          "Tenure": tenureF,
          "Balance": balanceF,
          "HasCrCard": hasCreditCaard,
          "IsActiveMember": isActiveF,
          "EstimatedSalary": salary,
          "Male": maleF,
          "Female": femaleF,
          "NumOfProducts_1": product1,
          "NumOfProducts_3": product3,
          "NumOfProducts_2": product2,
          "NumOfProducts_4": product4,
          "France": france,
          "Spain": spain,
          "Germany": germany,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setdata(responseData);
        setIsLoading(false);
        console.log('API Response:', responseData);
        setIsDataFetched(true);
      } else {
        console.error('API Error:', response.statusText);
      }
    } catch (error) {
      console.error('API Request Error:', error);
    }
  }

  return (
    <section>
      <form className={classes.form} onSubmit={submitHanlder}>
        <div className={classes.row}>
          <div className={classes.control}>

            <label htmlFor="age"><h2>Age</h2></label>
            <input type="number" id="age" ref={ageRef} placeholder="Type your Age"></input>
          </div>
          <div className={classes.control}>

            <label htmlFor="Cs"><h2>Credit Score</h2></label>
            <input type="text" id="Cs" ref={creditScoreRef} placeholder="Type your Credit"></input>
          </div>
        </div>
        <div className={classes.row}>

          <div className={classes.control}>
            <label htmlFor="tenure"><h2>Tenure</h2></label>
            <input type="text" id="tenure" ref={tenureRef} placeholder="Type your Tenure"></input>
          </div>

          <div className={classes.control}>
            <label htmlFor="balance"><h2>Balance</h2></label>
            <input type="text" id="balance" ref={balanceRef} placeholder="Type your Balance"></input>
          </div>

        </div>
        <div className={classes.control}>
          <label htmlFor="salary"><h2>Your Estimated salary</h2></label>
          <input type="number" id="salary" ref={salaryRef} placeholder="Type your salary"></input>
        </div>

        <div className=' text-black align justify-between text-left  h-[600px] w-[50%] flex-wrap flex-col flex'>
          <div>

            <h2>Do you have a credit card?</h2>
            <label>
              Yes
              <input
                className={`${classes.checkboxradio}  ml-[65px]`}
                type="radio"
                name="creditCard"
                value="yes"
                onChange={handleCreditCardChange}
                checked={hasCredit === 1}
              />
            </label>
            <br />
            <label>
              No
              <input
                className={`${classes.checkboxradio}  ml-[68px]`}
                type="radio"
                name="creditCard"
                value="no"
                onChange={handleCreditCardChange}
                checked={hasCredit === 0}
              />
            </label>
          </div>
          <div className=''>

            <h2>Are you Active Member?</h2>
            <label>
              Yes
              <input
                className={`${classes.checkboxradio}  ml-[65px]`}
                type="radio"
                name="activeMember"
                value="yes"
                onChange={handleActiveChange}
                checked={isActive === 1}
              />
            </label>
            <br />
            <label>
              No
              <input
                className={`${classes.checkboxradio}  ml-[68px]`}
                type="radio"
                name="activeMember"
                value="no"
                onChange={handleActiveChange}
                checked={isActive === 0}
              />
            </label>
          </div>
          <div className='w-[100%]  flex flex-col justify-around'>

            <h2>Gender Selection</h2>
            <label>
              Male
              <input className={`${classes.checkboxradio}  ml-[53px]`} type="radio" name="gender" value="male" onChange={handleMaleSelect} checked={male === 1} />
            </label>
            <label>
              Female
              <input className={`${classes.checkboxradio}  ml-[35px]`} type="radio" name="gender" value="female" onChange={handleFemaleSelect} checked={female === 1} />
            </label>
            {/* <br />
                <p>Male: {male}</p>
                <p>Female: {female}</p>
                        </div>
                        <div> */}
          </div>
          <div className=''>

            <h2>How many products do you have?</h2>
            <label>
              1
              <input
                className={`${classes.checkboxradio}  ml-[80px]`}
                type="radio"
                name="numOfProducts"
                value="1"
                onChange={handleNumOfProductsChange}
                checked={numOfProducts.Products_1 === 1}
              />
            </label>
            <br />
            <label>
              2
              <input
                className={`${classes.checkboxradio}  ml-[80px]`}
                type="radio"
                name="numOfProducts"
                value="2"
                onChange={handleNumOfProductsChange}
                checked={numOfProducts.Products_2 === 1}
              />
            </label>
            <br />
            <label>
              3
              <input
                className={`${classes.checkboxradio}  ml-[80px]`}
                type="radio"
                name="numOfProducts"
                value="3"
                onChange={handleNumOfProductsChange}
                checked={numOfProducts.Products_3 === 1}
              />
            </label>
            <br />
            <label>
              4
              <input
                className={`${classes.checkboxradio}  ml-[80px]`}
                type="radio"
                name="numOfProducts"
                value="4"
                onChange={handleNumOfProductsChange}
                checked={numOfProducts.Products_4 === 1}
              />
            </label>
          </div>
          <div className=''>

            <h2>Where are you from?</h2>
            <label>
              France
              <input
                className={`${classes.checkboxradio}  ml-[39px]`}
                type="radio"
                name="location"
                value="France"
                onChange={handleLocationChange}
                checked={location.France === 1}
              />
            </label>
            <br />
            <label>
              Spain
              <input
                className={`${classes.checkboxradio}  ml-[48px]`}
                type="radio"
                name="location"
                value="Spain"
                onChange={handleLocationChange}
                checked={location.Spain === 1}
              />
            </label>
            <br />
            <label className=''>
              Germany
              <input
                className={`${classes.checkboxradio}  ml-5`}
                type="radio"
                name="location"
                value="Germany"
                onChange={handleLocationChange}
                checked={location.Germany === 1}
              />
            </label>
          </div>
          <br />
        </div>

        <button type="submit">Submit</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : isDataFetched ? (
        data === 1 ? (
          <h1 className="bg-purple-400 text-white text-lg w-[100%] p-16 rounded-md">
            Customer will Leave
          </h1>
        ) : (
          <h1 className="bg-red-300 text-white text-lg w-[100%] p-16 rounded-md">Customer will NOT Leave</h1>
        )
      ) : null}
    </section>
  );
}

export default NewComment;
