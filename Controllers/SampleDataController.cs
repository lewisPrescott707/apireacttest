using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace react_api.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpGet("[action]/{id}")]
        public IEnumerable<CustomerData> CustomersData(int id)
        {
            return new List<CustomerData>()
            {
                new CustomerData(){
                    CustomerId = 1234,
                    CustomerGuid = 4321 }
            };
        }

        public class CustomerData
        {
            public int CustomerId { get; set; }
            public int CustomerGuid {get; set; }
        }
    }
}
