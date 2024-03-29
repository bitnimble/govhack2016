﻿using CsvIngestion.Mappings;
using CsvIngestion.Models;
using CsvHelper;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsvIngestion.Services
{
    public class DrinkingFountainService
    {
        static public List<DrinkingFountain> Fountains { get; private set;}

        public DrinkingFountainService(string location = "")
        {
            if (Fountains == null)
            {
                if (location.Equals(""))
                {
                    location = "/Static/drinkingFountain.csv";
                }

                var BikeRackLocationsCSV = new CsvReader(File.OpenText(location));
                BikeRackLocationsCSV.Configuration.RegisterClassMap<DrinkingFountainMap>();
                Fountains = BikeRackLocationsCSV.GetRecords<DrinkingFountain>().ToList();
            }
        }
        
    }
}
