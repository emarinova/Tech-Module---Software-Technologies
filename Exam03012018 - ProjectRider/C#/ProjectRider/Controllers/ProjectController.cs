namespace ProjectRider.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using Models;

    [ValidateInput(false)]
    public class ProjectController : Controller
    {
        [HttpGet]
        [Route("")]
        public ActionResult Index()
        {
            using (var db = new ProjectRiderDbContext())
            {
                var projects = db.Projects.ToList();
                return View(projects);
            }
        }

        [HttpGet]
        [Route("create")]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [Route("create")]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Project project)
        {
            if(ModelState.IsValid)
            {
                using (var db = new ProjectRiderDbContext())
                {
                    db.Projects.Add(project);
                    db.SaveChanges();

                    return RedirectToAction("Index");
                }
            }

            return View(project);
        }

        [HttpGet]
        [Route("edit/{id}")]
        public ActionResult Edit(int id)
        {
            using (var db = new ProjectRiderDbContext())
            {
                var project = db.Projects
                    .Where(p => p.Id == id)
                    .First();

                if(project==null)
                {
                    return HttpNotFound();
                }

                return View(project);
            }
        }

        [HttpPost]
        [Route("edit/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult EditConfirm(int id, Project project)
        {
            using (var db = new ProjectRiderDbContext())
            {
                var projectEntity = db.Projects
                    .Where(p => p.Id == id)
                    .First();

                if (projectEntity == null)
                {
                    return HttpNotFound();
                }

                projectEntity.Title = project.Title;
                projectEntity.Description = project.Description;
                projectEntity.Budget = project.Budget;

                db.Entry(projectEntity).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();

                return RedirectToAction("Index");
            }
        }

        [HttpGet]
        [Route("delete/{id}")]
        public ActionResult Delete(int id)
        {
            using (var db = new ProjectRiderDbContext())
            {
                var project = db.Projects
                    .Where(p => p.Id == id)
                    .First();

                if (project == null)
                {
                    return HttpNotFound();
                }

                return View(project);
            }
        }

        [HttpPost]
        [Route("delete/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirm(int id, Project reportModel)
        {
            using (var db = new ProjectRiderDbContext())
            {
                var project = db.Projects
                    .Where(p => p.Id == id)
                    .First();

                if (project == null)
                {
                    return HttpNotFound();
                }

                db.Projects.Remove(project);
                db.SaveChanges();

                return RedirectToAction("Index");
            }
        }
    }
}