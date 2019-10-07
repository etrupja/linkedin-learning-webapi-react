using System;
using System.Collections.Generic;

public static class Data
{
    public static List<Note> Notes => allNotes;
    static List<Note> allNotes = new List<Note>()
    {
        new Note()
        {
            Id=1,
            Title="Note 1 title",
            Description="Note 1 description",
            DateAdded = new DateTime(2019,01,20),
            DateUpdated = null
        },
        new Note()
        {
            Id=2,
            Title="Note 2 title",
            Description="Note 2 description",
            DateAdded = new DateTime(2019,01,20),
            DateUpdated = null
        },
        new Note()
        {
            Id=3,
            Title="Note 3 title",
            Description="Note 3 description",
            DateAdded = new DateTime(2019,01,20),
            DateUpdated = null
        },
        new Note()
        {
            Id=4,
            Title="Note 4 title",
            Description="Note 4 description",
            DateAdded = new DateTime(2019,01,20),
            DateUpdated = null
        },
        new Note()
        {
            Id=5,
            Title="Note 5 title",
            Description="Note 5 description",
            DateAdded = new DateTime(2019,01,20),
            DateUpdated = null
        },
        new Note()
        {
            Id=6,
            Title="Note 6 title",
            Description="Note 6 description",
            DateAdded = new DateTime(2019,01,20),
            DateUpdated = null
        },
        new Note()
        {
            Id=7,
            Title="Note 7 title",
            Description="Note 7 description",
            DateAdded = new DateTime(2019,01,20),
            DateUpdated = null
        },
        new Note()
        {
            Id=8,
            Title="Note 8 title",
            Description="Note 9 description",
            DateAdded = new DateTime(2019,01,20),
            DateUpdated = null
        },
    };

}