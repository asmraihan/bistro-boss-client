/* 
========BASIC LAYER+++++++++++
1/ do not show the link them who should not see it
only show to the person /type of user who should see it
2/ Do not allow to visit the page by typing the url 
use AdminRoute to protect the route
*/

/* 
===========To SEND DATA++++++++++++
1/ verify token (send authorization token in the header to the server)
if possible use axios  to send jwt token by intercepting the request
2/ if it is admin activity, verify the user is admin by using verifyAdmin middleware


*/