class RemoveForeignKey < ActiveRecord::Migration[5.2]
  def change
    add_reference :checkpoints, :users, foreign_key: true
    add_reference :checkpoints, :patterns, foreign_key: true
  end
end
