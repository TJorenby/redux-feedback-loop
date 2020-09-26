
--SETUP--

 [] npm install
 [] create db
 [] npm dependencies
    [] npm install redux react-redux

--COMPONENTS--

    Requirements
        [] Header (displays feedback question)
        [] Input Field
            []Alert if Field is empty
        [] NEXT Button
            [] Links to next question   

    []Header

    []How Are you Feeling?

    []How well are you understanding the content?

    []How well are you being supported?

    []Any comments you want to leave?
        [] Remove input validation


    []Review Feedback
        [] SUBMIT button replaces NEXT Buttion
        [] Displays Feedback Results
        []Sends Review to db
    
    []Admin
        [] Displays Submitted Feedback Entries
            [] GET from db
            [] DELETE submission
