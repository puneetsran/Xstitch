class CreateCheckpoints < ActiveRecord::Migration[5.2]
  def change
    create_table :checkpoints do |t|

      t.timestamps
    end
  end
end
