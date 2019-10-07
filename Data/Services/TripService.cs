using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

public class TripService : ITripService
{
    public void DeleteTrip(int tripId)
    {
        var trip = Data.Trips.FirstOrDefault(n => n.Id == tripId);
        Data.Trips.Remove(trip);
    }

    public List<Trip> GetAllTrips()
    {
        return Data.Trips.ToList();
    }
    public Trip GetTripById(int tripId)
    {
        var trip = Data.Trips.FirstOrDefault(n => n.Id == tripId);
        return trip;
    }

    public void UpdateTrip(int tripId, Trip trip)
    {
        var oldTrip = Data.Trips.FirstOrDefault(n => n.Id == tripId);

        oldTrip.Name = trip.Name;
        oldTrip.Description = trip.Description;
        oldTrip.DateStarted = trip.DateStarted;
        oldTrip.DateCompleted = trip.DateCompleted;
    }

    public void AddTrip(Trip trip)
    {
        Data.Trips.Add(trip);
    }
}