using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angular.Controllers
{
    [Route("api/[controller]")]
    public class NotesController : Controller
    {
        private INoteService _service;
        public NotesController(INoteService service)
        {
            _service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetNotes()
        {
            try
            {
                var allNotes = _service.GetAllNotes();
                return Ok(allNotes);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("SingleNote/{id}")]
        public IActionResult GetNoteById(int id)
        {
            try
            {
                var note = _service.GetNoteById(id); ;
                return Ok(note);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("UpdateNote/{id}")]
        public IActionResult UpdateNote(int id, [FromBody]Note note)
        {
            try
            {
                _service.UpdateNote(id, note);
                return Ok(note);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("AddNote")]
        public IActionResult AddNote([FromBody]Note note)
        {
            try
            {
                if (note != null)
                {
                    _service.AddNote(note);
                    return Ok(note);
                }
                return BadRequest("Note was not added!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpDelete("DeleteNote/{id}")]
        public IActionResult DeleteNote(int id)
        {
            try
            {
                _service.DeleteNote(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
