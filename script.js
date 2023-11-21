// Fetch JSON data from "db.json" File
fetch("db.json")
    .then(response => response.json())

    .then(data => {

        // Users Information
        addUsersInformation(data)

        // Youtube Channels Information
        addYoutubeChannelsInformation(data)

    })

    .catch(error => console.error('Error fetching JSON Data : ', error));

// Function 1 : Function to add Users Information in the Web UI
const addUsersInformation = (data) => {
    // Users Information
    var userTableBody = document.getElementById("userTableBody")

    data.users.forEach(user => {
        var row = userTableBody.insertRow()
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)

        cell1.textContent = user.user_id
        cell2.textContent = user.user_name
        cell3.textContent = user.user_email
    });
}

// Function 2 : Function to add Youtube Channel Information in the Web UI
const addYoutubeChannelsInformation = (data) => {
    // Youtube Channels Information
    var channelTableBody = document.getElementById("channelTableBody")

    data.youtube_channels.forEach(channel => {
        var row = channelTableBody.insertRow()
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)

        cell1.textContent = channel.channel_id
        cell2.textContent = channel.channel_name
        cell3.textContent = channel.channel_creator
        cell4.textContent = channel.channel_ranking
    });
}