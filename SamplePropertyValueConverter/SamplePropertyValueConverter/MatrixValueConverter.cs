using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using Umbraco.Core.Logging;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Core.PropertyEditors;
using Umbraco.Core;

namespace SamplePropertyValueConverter
{
    [PropertyValueType(typeof(Matrix))]
    [PropertyValueCache(PropertyCacheValue.All, PropertyCacheLevel.Content)]
    public class MatrixValueConverter : PropertyValueConverterBase
    {
        public override bool IsConverter(PublishedPropertyType propertyType)
        {
            return propertyType.PropertyEditorAlias.Equals("Nibble.MatrixEditor");
        }

        public override object ConvertDataToSource(PublishedPropertyType propertyType, object source, bool preview)
        {
            if (source == null) return null;
            var sourceString = source.ToString();

            if (sourceString.DetectIsJson())
            {
                try
                {
                    var obj = JsonConvert.DeserializeObject<string[][]>(sourceString);
                    var matrix = new Matrix();
                    var rows = obj.Select(r => new Row {Values = r.ToList()}).ToList();
                    matrix.Rows = rows;
                    return matrix;
                }
                catch (Exception ex)
                {
                    return null;
                }
            }

            return sourceString;
        }
    }
}
