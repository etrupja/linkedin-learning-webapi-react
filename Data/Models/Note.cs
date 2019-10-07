using System;

public class Note
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    // public Status Status { get; set; }
    public DateTime DateAdded { get; set; }
    public DateTime? DateUpdated { get; set; }

}

public enum Status 
{
    New,
    Completed,
    Archived

}