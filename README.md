# Notes

typeorm-model-generator -d "./abx.db" -e sqlite -o ./models
cat ./setup/popultepopulate-track.sql | sqlite3 abx.db
