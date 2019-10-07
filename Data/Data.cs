using System;
using System.Collections.Generic;

public static class Data
{
    public static List<Trip> Trips => allTrips;
    static List<Trip> allTrips = new List<Trip>()
    {
        new Trip()
        {
            Id=1,
            Name="Visit 1",
            Description="Visit 1 description...",
            DateStarted = new DateTime(2017,01,20),
            DateCompleted = null
        },
        new Trip()
        {
            Id=2,
            Name="Visit 2",
            Description="Visit 2 description...",
            DateStarted = new DateTime(2019,02,22),
            DateCompleted = new DateTime(2019,01,30)
        },
        new Trip()
        {
            Id=3,
            Name="Visit 3",
            Description="Visit 3 description...",
            DateStarted = new DateTime(2019,01,27),
            DateCompleted = new DateTime(2019,01,30)
        },
        new Trip()
        {
            Id=4,
            Name="Visit 4",
            Description="Visit 4 description...",
            DateStarted = new DateTime(2019,01,20),
            DateCompleted = null
        },
        new Trip()
        {
            Id=5,
            Name="Visit 5",
            Description="Visit 6 description...",
            DateStarted = new DateTime(2015,01,20),
            DateCompleted = new DateTime(2015,01,30)
        },
        new Trip()
        {
            Id=7,
            Name="Visit 7",
            Description="Visit 7 description...",
            DateStarted = new DateTime(2019,01,20),
            DateCompleted = null
        },
        new Trip()
        {
            Id=8,
            Name="Visit 8",
            Description="Visit 8 description...",
            DateStarted = new DateTime(2019,01,20),
            DateCompleted = null
        },
        new Trip()
        {
            Id=9,
            Name="Visit 9",
            Description="Visit 9 description...",
            DateStarted = new DateTime(2019,01,20),
            DateCompleted = null
        }
    };

}