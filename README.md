# SmartLastMileAdmin Web app.

###  This app allows you view orders info, live orders, to be delivered orders, drivers, monitor drivers , view feedbacks, assign drivers to orders.

## Instructions to run this project

    1. Run npm init in the project directory.
    2. Open the browser and type localhost:3000/
        2-a. Run the python project attached with the submission to support clustering in this admin panel.Make sure the flask server is up and running.
    3. You can see a dashboard displaying orders info and live orders on the bottom.
    4. Using the navigation menu on the left, you can navigate through screens.
    5. Profile info is displayed on the bottom left.
    6. In the View items screen, wait until the Get Orders button comes up on the top right of the screen.Till that it would should no items yet.
    7. Once you get the getOrders button , click on it and wait for sometime (Clustering is being done in the backend).
    8. There is list of cards respective to clusters are displayed with internally a list of orders and two button on top, Show in map and assign driver.
    9. Click on the assign driver button on the top right of the card,it will show a popup loading nearest driver info.Once driver name and mobile is displayed, click on the Assign driver button.
    10. This will assign these items to the driver.
    11. On Clicking the show on map button, you can view the cluster of markers being marked on the screen for the respective cluster.
    12. In the view drivers screen, you can view the list of drivers.
    13. In the monitor drivers screen, you can see a interactive map with markers displaying realtime information of drivers.
    14. In the feedback screen, you can see the list of feedbacks provided.
    15. On the top right, there is analytics button.
    16. Clicking on that will use sentiment analysis engine on the backend with the text in the list displayed and displays the percentage of positive , negative and neutral sentiments on the cards.
     
Demo Video: https://www.youtube.com/watch?v=sGybScEdHQ0
