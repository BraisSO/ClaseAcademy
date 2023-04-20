from flask import Flask, request, jsonify
import os 

app = Flask(__name__)

def chunks(lst, n):
    #"""Divide una lista en lotes de tamaño n."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]

@app.route('/upload', methods=['POST'])
def upload():
    if request.method == 'POST':
        # Verificar si la carpeta existe, si no, crearla
        if not os.path.exists('subidaArchivos\\archivos'):
            os.makedirs('subidaArchivos\\archivos')

        # Obtener los archivos
        files = request.files.getlist('file')
        
        #Enviar los archivos por lotes
        batch_size = 10  # Define el tamaño máximo de un lote
        #El número 10 en batch_size representa el tamaño máximo de un lote de archivos que se enviará en una sola petición. 
        #En otras palabras, si el usuario selecciona 30 archivos para subir, estos archivos se dividirán en 3 lotes de 10 archivos cada uno
        batches = list(chunks(files, batch_size))
        total_files = len(files)
        total_batches = len(batches)
        for i, batch in enumerate(batches):
            # Guardar los archivos en la carpeta subidaArchivos\archivos
            for file in batch:
                file.save(os.path.join('subidaArchivos\\archivos', file.filename))
            
        # Devolver una respuesta JSON
        message = f'Se subieron {total_files} archivos en {total_batches} lotes'
        return jsonify({'message': message})
    else:
        return jsonify({'message': 'Solicitud no valida'})

if __name__ == '__main__':
    app.run(debug=True)