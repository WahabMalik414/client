const HomeContent = () =>{
    return(
        <>
         <p className="font-bold text-2xl m-5">
          This website is being created to serve the members of the Palms Golf
          Club
        </p>
        <p className="font-bold text-2xl m-5">
          It will serve as a communication channel to aggregate members’ news
          and opinions.
        </p>
        <p className="font-bold text-2xl m-5">
          Transparency is the goal: Excepting personal privacy, there is nothing
          a member cannot ask or know.
        </p>
        <div className="flex justify-center">
          {" "}
          <p className="text-2xl m-5 font-semibold">
            Member name :{" "}
            <span>
              <input className="border-2 border-black" type="text" />
            </span>
          </p>
        </div>
        </>
    )
}

export default HomeContent;