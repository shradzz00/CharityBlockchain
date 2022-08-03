// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

struct CharityEvent {
    string name;
    uint id;
    string description;
    uint money;
    string imageUri;
    address payable owner;
    bool isVerified;
}

contract Charity {
    uint eventCount = 0;
    mapping(uint => CharityEvent) public charityEvents;

 
    function getEvents() public view returns (CharityEvent[] memory){
        CharityEvent[] memory events = new CharityEvent[](eventCount);
        for (uint i = 0; i < eventCount; i++) {
            events[i] = charityEvents[i];
        }
        return events;
    }

    function addEvent(string calldata name , string calldata description, string calldata imageUri) public {
        charityEvents[eventCount] = CharityEvent({
            name: name,
            id: eventCount,
            description: description,
            money: 0,
            imageUri: imageUri,
            owner: payable(msg.sender),
            isVerified: false
        });
        eventCount++;
    }

    function fundEvent(uint eventId) public payable {
        require(eventId < eventCount, "Event id invalid!");
        charityEvents[eventId].money += msg.value;
    }

    function verifyEvent(uint eventId) public {
        require(eventId < eventCount, "Event id invalid!");
        charityEvents[eventId].isVerified = true;
    }
}
