<html>
<datami-multi-files
  title="test multi-files observatoire"
  options='{
  "display": "horizontal"
}'
  gitfiles='[
  {
    "title": "Données de l-observatoire",
    "activate": true,
    "gitfile": "https://github.com/multi-coop/gitribute-content-test/blob/main/data/csv/odf/ODF-Observatoire-apiviz_data-export_solidata-220425b-simplified.csv",
    "default-tab": true,
    "options": {
      "height": "500px",
      "separator": ";",
      "lockcolumns": true,
      "customfilters": {
        "activate": true,
        "filterfields": [
          "type",
          "platform_clean",
          "depcode"
        ]
      },
      "schema": {
        "file": "https://github.com/multi-coop/gitribute-content-test/blob/main/data/json/odf/ODF-Observatoire-apiviz_data-schema.json"
      },
      "fields-custom-properties": {
        "file": "https://github.com/multi-coop/gitribute-content-test/blob/main/data/json/odf/ODF-Observatoire-apiviz_data-fields-custom-props.json"
      },
      "cardsview": {
        "activate": true,
        "default": false
      },
      "cardsdetail": true,
      "cardssettings": {
        "mini": {
          "nom": {
            "position": "title"
          },
          "siren": {
            "position": "resume"
          },
          "tags": {
            "position": "tags"
          }
        },
        "detail": {
          "nom": {
            "position": "title"
          },
          "orga": {
            "position": "resume"
          },
          "siren": {
            "position": "description"
          },
          "adress": {
            "position": "description"
          },
          "dep_label": {
            "position": "tags"
          },
          "tags": {
            "position": "tags"
          }
        }
      }
    },
    "usertoken": ""
  },
  {
    "title": "Thématiques",
    "activate": true,
    "gitfile": "https://github.com/multi-coop/gitribute-content-test/blob/main/data/csv/odf/ODF-Observatoire-thematiques.csv",
    "options": {
      "height": "500px",
      "separator": ",",
      "lockcolumns": true,
      "customfilters": {
        "activate": true,
        "filterfields": [
          "Tags",
          "Organisations_Noms"
        ]
      },
      "schema": {
        "fields": [
          {
            "name": "Organisations copy",
            "type": "boolean"
          }
        ]
      },
      "fields-custom-properties": {
        "file": "https://github.com/multi-coop/gitribute-content-test/blob/main/data/json/odf/ODF-thematiques-fields-custom-props.json"
      }
    },
    "onlypreview": true,
    "usertoken": ""
  },
  {
    "title": "Schéma des données de l-observatoire",
    "activate": true,
    "default-tab": false,
    "gitfile": "https://github.com/multi-coop/gitribute-content-test/blob/main/data/json/odf/ODF-Observatoire-apiviz_data-schema.json",
    "options": {
      "defaultDepth": 2,
      "allowKeyEdit": true
    },
    "onlypreview": false,
    "usertoken": ""
  },
  {
    "title": "Présentation de l-Observatoire de l-Open data",
    "activate": true,
    "gitfile": "https://github.com/multi-coop/gitribute-content-test/blob/main/texts/markdown/odf/ODF-observatoire-intro.md",
    "options": ""
  }
]'
  locale="fr"
></datami-multi-files>
</html>

<script src="https://datami-widget.multi.coop/js/app.js" type="text/javascript" defer></script>