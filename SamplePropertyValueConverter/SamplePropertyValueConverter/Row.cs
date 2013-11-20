using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SamplePropertyValueConverter
{
    public class Row
    {
        public IEnumerable<string> Values { get; set; }

        public Row()
        {
            Values = new List<string>();
        }
    }
}
