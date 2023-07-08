import MenuList from "../MenuList/MenuList";


const x = 10; // Variable - 1way


const Footer = function(){

    const year = 2023;//-> 1-way 
    const developerName = "Yogaasri"; //1-way
    //Data binding - Keep the data inside the comp and use it
    //2 types of databinding- one way, two way
    // 1 way - Jsx displays the data
    // 2 way - Keep the ata in variable and display it in jsx 
    // then update the data and see the changes in jsx.


    return(
        <footer  className = "text-center">
        <hr/> 
        {/* horizontal line */}

            <MenuList/>
            <h4>CopyRights {year}|{developerName}</h4>
            <p>{x}</p>
  
        </footer>
    );
}
export default Footer;