using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

public interface ITripService
{
    List<Trip> GetAllTrips();
    Trip GetTripById(int tripId);
    void UpdateTrip(int tripId, Trip trip);
    void DeleteTrip(int tripId);
    void AddTrip(Trip trip);
}