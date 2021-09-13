# Run this to add the Django migrations into Docker container.
docker-compose run backend python3 manage.py makemigrations
docker-compose run backend python3 manage.py migrate